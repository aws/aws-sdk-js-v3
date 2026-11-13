# Amazon SNS Message Validator for JavaScript

The **Amazon SNS Message Validator** library allows you to validate that
incoming HTTP(S) POST messages are valid Amazon SNS notifications. This library
is standalone and does not depend on an SNS client.

## Installation

Install with npm or yarn:

```
npm i @aws-sdk/lib-sns
```

or

```
yarn add @aws-sdk/lib-sns
```

## Basic Usage

To validate a message, you can instantiate a `MessageValidator` object and pass
an SNS message to its `validate` method. The message should be the result of
calling `JSON.parse` on the body of the HTTP(S) message sent by SNS to your
endpoint. `validate` returns a promise that resolves with the successfully
validated SNS message, or rejects with an error.

The message validator checks the `SigningCertURL`, `SignatureVersion`, and
`Signature` to make sure they are valid and consistent with the message data.

```javascript
import { MessageValidator } from "@aws-sdk/lib-sns";

const validator = new MessageValidator();

try {
  const message = await validator.validate(message);
  // message has been validated and its signature checked.
} catch (err) {
  // Your message could not be validated.
}
```

A Node-style callback is also accepted. The callback takes two arguments, the
first being an error and the second being the successfully validated SNS
message.

```javascript
validator.validate(message, function (err, message) {
  if (err) {
    // Your message could not be validated.
    return;
  }

  // message has been validated and its signature checked.
});
```

## Installation

The SNS Message Validator relies on the Node crypto module and is only designed
to work on a server, not in a browser. The validation performed is only
necessary when subscribing HTTP(S) endpoints to a topic.

## About Amazon SNS

[Amazon Simple Notification Service (Amazon SNS)][sns] is a fast, fully-managed,
push messaging service. Amazon SNS can deliver messages to email, mobile devices
(i.e., SMS; iOS, Android and FireOS push notifications), Amazon SQS queues, and
— of course — HTTP/HTTPS endpoints.

With Amazon SNS, you can setup topics to publish custom messages to subscribed
endpoints. However, SNS messages are used by many of the other AWS services to
communicate information asynchronously about your AWS resources. Some examples
include:

- Configuring Amazon S3 Glacier to notify you when a retrieval job is complete.
- Configuring AWS CloudTrail to notify you when a new log file has been written.

Though you can certainly subscribe your email address to receive SNS messages
from service events like these, your inbox would fill up rather quickly. There
is great power, however, in being able to subscribe an HTTP/HTTPS endpoint to
receive the messages. This allows you to program webhooks for your applications
to easily respond to various events.

## Handling Messages

### Confirming a Subscription to a Topic

In order to handle a `SubscriptionConfirmation` message, you must use the
`SubscribeURL` value in the incoming message:

```javascript
import { MessageValidator } from "@aws-sdk/lib-sns";

const validator = new MessageValidator();

try {
  const message = await validator.validate(message);

  if (message.Type === "SubscriptionConfirmation") {
    await fetch(message.SubscribeURL);
    // You have confirmed your endpoint subscription
  }
} catch (err) {
  console.error(err);
}
```

If an incoming message includes multibyte characters and its encoding is utf8,
set the encoding on the `validator`.

```javascript
import { MessageValidator } from "@aws-sdk/lib-sns";

const validator = new MessageValidator();
validator.encoding = "utf8";
```

### Receiving a Notification

To receive a notification, use the same code as the preceding example, but
check for the `Notification` message type.

```javascript
if (message.Type === "Notification") {
  // Do whatever you want with the message body and data.
  console.log(message.MessageId + ": " + message.Message);
}
```

The message body will be a string, and will hold whatever data was published
to the SNS topic.

### Unsubscribing

Unsubscribing looks the same as subscribing, except the message type will be
`UnsubscribeConfirmation`.

```javascript
if (message.Type === "UnsubscribeConfirmation") {
  // Unsubscribed in error? You can resubscribe by visiting the endpoint
  // provided as the message's SubscribeURL field.
  await fetch(message.SubscribeURL);
  // You have re-subscribed your endpoint.
}
```

[sns]: http://aws.amazon.com/sns/
