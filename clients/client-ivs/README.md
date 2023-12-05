<!-- generated file, do not edit directly -->

# @aws-sdk/client-ivs

## Description

AWS SDK for JavaScript Ivs Client for Node.js, Browser and React Native.

<p>
<b>Introduction</b>
</p>
<p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP
API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both
requests and responses, including errors.</p>
<p>The API is an Amazon Web Services regional service. For a list of supported regions and
Amazon IVS HTTPS service endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
<i>Amazon Web Services General Reference</i>.</p>
<p>
<i>
<b>All API request parameters and URLs are case sensitive.
</b>
</i>
</p>
<p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document
History</a>.</p>
<p>
<b>Allowed Header Values</b>
</p>
<ul>
<li>
<p>
<code>
<b>Accept:</b>
</code> application/json</p>
</li>
<li>
<p>
<code>
<b>Accept-Encoding:</b>
</code> gzip, deflate</p>
</li>
<li>
<p>
<code>
<b>Content-Type:</b>
</code>application/json</p>
</li>
</ul>
<p>
<b>Resources</b>
</p>
<p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html"> Getting Started with
Amazon IVS</a>):</p>
<ul>
<li>
<p>
<b>Channel</b> — Stores configuration data related to your live stream. You first create a
channel and then use the channel’s stream key to start your live stream. See the Channel
endpoints for more information. </p>
</li>
<li>
<p>
<b>Stream key</b> — An identifier assigned by Amazon IVS when you create a channel, which is
then used to authorize streaming. See the StreamKey endpoints for more information.
<i>
<b>Treat the stream key like a secret, since it allows
anyone to stream to the channel.</b>
</i>
</p>
</li>
<li>
<p>
<b>Playback key pair</b> — Video playback may be restricted using playback-authorization
tokens, which use public-key encryption. A playback key pair is the public-private pair of
keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair
endpoints for more information.</p>
</li>
<li>
<p>
<b>Recording configuration</b> — Stores configuration related to recording a live stream and
where to store the recorded content. Multiple channels can reference the same recording
configuration. See the Recording Configuration endpoints for more information.</p>
</li>
</ul>
<p>
<b>Tagging</b>
</p>
<p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services
resource. A tag comprises a <i>key</i> and a <i>value</i>, both
set by you. For example, you might set a tag as <code>topic:nature</code> to label a
particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
more information, including restrictions that apply to tags and "Tag naming limits and
requirements"; Amazon IVS has no service-specific constraints beyond what is documented
there.</p>
<p>Tags can help you identify and organize your Amazon Web Services resources. For example,
you can use the same tag for different resources to indicate that they are related. You can
also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p>
<p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording
Configurations.</p>
<p>At most 50 tags can be applied to a resource. </p>
<p>
<b>Authentication versus Authorization</b>
</p>
<p>Note the differences between these concepts:</p>
<ul>
<li>
<p>
<i>Authentication</i> is about verifying identity. You need to be
authenticated to sign Amazon IVS API requests.</p>
</li>
<li>
<p>
<i>Authorization</i> is about granting permissions. Your IAM roles need
to have permissions for Amazon IVS API requests. In addition, authorization is needed to
view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon
IVS private channels</a>. (Private channels are channels that are enabled for
"playback authorization.")</p>
</li>
</ul>
<p>
<b>Authentication</b>
</p>
<p>All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services
Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying
API calls for you. However, if your application calls the Amazon IVS API directly, it’s your
responsibility to sign the requests.</p>
<p>You generate a signature using valid Amazon Web Services credentials that have permission
to perform the requested action. For example, you must sign PutMetadata requests with a
signature generated from a user account that has the <code>ivs:PutMetadata</code>
permission.</p>
<p>For more information:</p>
<ul>
<li>
<p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
(Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
General Reference</i>.</p>
</li>
<li>
<p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
the Security page of the <i>Amazon IVS User Guide</i>.</p>
</li>
</ul>
<p>
<b>Amazon Resource Names (ARNs)</b>
</p>
<p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a
resource unambiguously across all of AWS, such as in IAM policies and API calls. For more
information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General
Reference</i>.</p>
<p>
<b>Channel Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateChannel</a> — Creates a new channel and an associated stream
key to start streaming.</p>
</li>
<li>
<p>
<a>GetChannel</a> — Gets the channel configuration for the specified
channel ARN.</p>
</li>
<li>
<p>
<a>BatchGetChannel</a> — Performs <a>GetChannel</a> on
multiple ARNs simultaneously.</p>
</li>
<li>
<p>
<a>ListChannels</a> — Gets summary information about all channels in
your account, in the Amazon Web Services region where the API request is processed. This
list can be filtered to match a specified name or recording-configuration ARN. Filters are
mutually exclusive and cannot be used together. If you try to use both filters, you will
get an error (409 Conflict Exception).</p>
</li>
<li>
<p>
<a>UpdateChannel</a> — Updates a channel's configuration. This does
not affect an ongoing stream of this channel. You must stop and restart the stream for the
changes to take effect.</p>
</li>
<li>
<p>
<a>DeleteChannel</a> — Deletes the specified channel.</p>
</li>
</ul>
<p>
<b>StreamKey Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateStreamKey</a> — Creates a stream key, used to initiate a
stream, for the specified channel ARN.</p>
</li>
<li>
<p>
<a>GetStreamKey</a> — Gets stream key information for the specified
ARN.</p>
</li>
<li>
<p>
<a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on
multiple ARNs simultaneously.</p>
</li>
<li>
<p>
<a>ListStreamKeys</a> — Gets summary information about stream keys
for the specified channel.</p>
</li>
<li>
<p>
<a>DeleteStreamKey</a> — Deletes the stream key for the specified
ARN, so it can no longer be used to stream.</p>
</li>
</ul>
<p>
<b>Stream Endpoints</b>
</p>
<ul>
<li>
<p>
<a>GetStream</a> — Gets information about the active (live) stream on
a specified channel.</p>
</li>
<li>
<p>
<a>GetStreamSession</a> — Gets metadata on a specified stream.</p>
</li>
<li>
<p>
<a>ListStreams</a> — Gets summary information about live streams in
your account, in the Amazon Web Services region where the API request is processed.</p>
</li>
<li>
<p>
<a>ListStreamSessions</a> — Gets a summary of current and previous
streams for a specified channel in your account, in the AWS region where the API request
is processed.</p>
</li>
<li>
<p>
<a>StopStream</a> — Disconnects the incoming RTMPS stream for the
specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to
prevent further streaming to a channel.</p>
</li>
<li>
<p>
<a>PutMetadata</a> — Inserts metadata into the active stream of the
specified channel. At most 5 requests per second per channel are allowed, each with a
maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching
your data into a single PutMetadata call.) At most 155 requests per second per account are
allowed.</p>
</li>
</ul>
<p>
<b>Private Channel Endpoints</b>
</p>
<p>For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the
<i>Amazon IVS User Guide</i>.</p>
<ul>
<li>
<p>
<a>ImportPlaybackKeyPair</a> — Imports the public portion of a new
key pair and returns its <code>arn</code> and <code>fingerprint</code>. The
<code>privateKey</code> can then be used to generate viewer authorization tokens, to
grant viewers access to private channels (channels enabled for playback
authorization).</p>
</li>
<li>
<p>
<a>GetPlaybackKeyPair</a> — Gets a specified playback authorization
key pair and returns the <code>arn</code> and <code>fingerprint</code>. The
<code>privateKey</code> held by the caller can be used to generate viewer authorization
tokens, to grant viewers access to private channels.</p>
</li>
<li>
<p>
<a>ListPlaybackKeyPairs</a> — Gets summary information about playback
key pairs.</p>
</li>
<li>
<p>
<a>DeletePlaybackKeyPair</a> — Deletes a specified authorization key
pair. This invalidates future viewer tokens generated using the key pair’s
<code>privateKey</code>.</p>
</li>
<li>
<p>
<a>StartViewerSessionRevocation</a> — Starts the process of revoking
the viewer session associated with a specified channel ARN and viewer ID. Optionally, you
can provide a version to revoke viewer sessions less than and including that
version.</p>
</li>
<li>
<p>
<a>BatchStartViewerSessionRevocation</a> — Performs <a>StartViewerSessionRevocation</a> on multiple channel ARN and viewer ID pairs
simultaneously.</p>
</li>
</ul>
<p>
<b>RecordingConfiguration Endpoints</b>
</p>
<ul>
<li>
<p>
<a>CreateRecordingConfiguration</a> — Creates a new recording
configuration, used to enable recording to Amazon S3.</p>
</li>
<li>
<p>
<a>GetRecordingConfiguration</a> — Gets the recording-configuration
metadata for the specified ARN.</p>
</li>
<li>
<p>
<a>ListRecordingConfigurations</a> — Gets summary information about
all recording configurations in your account, in the Amazon Web Services region where the
API request is processed.</p>
</li>
<li>
<p>
<a>DeleteRecordingConfiguration</a> — Deletes the recording
configuration for the specified ARN.</p>
</li>
</ul>
<p>
<b>Amazon Web Services Tags Endpoints</b>
</p>
<ul>
<li>
<p>
<a>TagResource</a> — Adds or updates tags for the Amazon Web Services
resource with the specified ARN.</p>
</li>
<li>
<p>
<a>UntagResource</a> — Removes tags from the resource with the
specified ARN.</p>
</li>
<li>
<p>
<a>ListTagsForResource</a> — Gets information about Amazon Web Services tags for the specified ARN.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-ivs
using your favorite package manager:

- `npm install @aws-sdk/client-ivs`
- `yarn add @aws-sdk/client-ivs`
- `pnpm add @aws-sdk/client-ivs`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `IvsClient` and
the commands you need, for example `ListStreamsCommand`:

```js
// ES5 example
const { IvsClient, ListStreamsCommand } = require("@aws-sdk/client-ivs");
```

```ts
// ES6+ example
import { IvsClient, ListStreamsCommand } from "@aws-sdk/client-ivs";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new IvsClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new ListStreamsCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-ivs";
const client = new AWS.Ivs({ region: "REGION" });

// async/await.
try {
  const data = await client.listStreams(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .listStreams(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.listStreams(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-ivs` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
BatchGetChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/BatchGetChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchGetChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchGetChannelCommandOutput/)

</details>
<details>
<summary>
BatchGetStreamKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/BatchGetStreamKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchGetStreamKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchGetStreamKeyCommandOutput/)

</details>
<details>
<summary>
BatchStartViewerSessionRevocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/BatchStartViewerSessionRevocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchStartViewerSessionRevocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/BatchStartViewerSessionRevocationCommandOutput/)

</details>
<details>
<summary>
CreateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/CreateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateChannelCommandOutput/)

</details>
<details>
<summary>
CreateRecordingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/CreateRecordingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateRecordingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateRecordingConfigurationCommandOutput/)

</details>
<details>
<summary>
CreateStreamKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/CreateStreamKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateStreamKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/CreateStreamKeyCommandOutput/)

</details>
<details>
<summary>
DeleteChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/DeleteChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteChannelCommandOutput/)

</details>
<details>
<summary>
DeletePlaybackKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/DeletePlaybackKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeletePlaybackKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeletePlaybackKeyPairCommandOutput/)

</details>
<details>
<summary>
DeleteRecordingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/DeleteRecordingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteRecordingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteRecordingConfigurationCommandOutput/)

</details>
<details>
<summary>
DeleteStreamKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/DeleteStreamKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteStreamKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/DeleteStreamKeyCommandOutput/)

</details>
<details>
<summary>
GetChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetChannelCommandOutput/)

</details>
<details>
<summary>
GetPlaybackKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetPlaybackKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetPlaybackKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetPlaybackKeyPairCommandOutput/)

</details>
<details>
<summary>
GetRecordingConfiguration
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetRecordingConfigurationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetRecordingConfigurationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetRecordingConfigurationCommandOutput/)

</details>
<details>
<summary>
GetStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamCommandOutput/)

</details>
<details>
<summary>
GetStreamKey
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetStreamKeyCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamKeyCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamKeyCommandOutput/)

</details>
<details>
<summary>
GetStreamSession
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/GetStreamSessionCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamSessionCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/GetStreamSessionCommandOutput/)

</details>
<details>
<summary>
ImportPlaybackKeyPair
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ImportPlaybackKeyPairCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ImportPlaybackKeyPairCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ImportPlaybackKeyPairCommandOutput/)

</details>
<details>
<summary>
ListChannels
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListChannelsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListChannelsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListChannelsCommandOutput/)

</details>
<details>
<summary>
ListPlaybackKeyPairs
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListPlaybackKeyPairsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListPlaybackKeyPairsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListPlaybackKeyPairsCommandOutput/)

</details>
<details>
<summary>
ListRecordingConfigurations
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListRecordingConfigurationsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListRecordingConfigurationsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListRecordingConfigurationsCommandOutput/)

</details>
<details>
<summary>
ListStreamKeys
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListStreamKeysCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamKeysCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamKeysCommandOutput/)

</details>
<details>
<summary>
ListStreams
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListStreamsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamsCommandOutput/)

</details>
<details>
<summary>
ListStreamSessions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListStreamSessionsCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamSessionsCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListStreamSessionsCommandOutput/)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/ListTagsForResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListTagsForResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/ListTagsForResourceCommandOutput/)

</details>
<details>
<summary>
PutMetadata
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/PutMetadataCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/PutMetadataCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/PutMetadataCommandOutput/)

</details>
<details>
<summary>
StartViewerSessionRevocation
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/StartViewerSessionRevocationCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/StartViewerSessionRevocationCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/StartViewerSessionRevocationCommandOutput/)

</details>
<details>
<summary>
StopStream
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/StopStreamCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/StopStreamCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/StopStreamCommandOutput/)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/TagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/TagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/TagResourceCommandOutput/)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/UntagResourceCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/UntagResourceCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/UntagResourceCommandOutput/)

</details>
<details>
<summary>
UpdateChannel
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/ivs/command/UpdateChannelCommand/) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/UpdateChannelCommandInput/) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-ivs/Interface/UpdateChannelCommandOutput/)

</details>
