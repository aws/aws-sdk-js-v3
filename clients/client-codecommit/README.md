<!-- generated file, do not edit directly -->

# @aws-sdk/client-codecommit

## Description

AWS SDK for JavaScript CodeCommit Client for Node.js, Browser and React Native.

<fullname>CodeCommit</fullname>

<p>This is the <i>CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for
CodeCommit API along with usage examples.</p>
<p>You can use the CodeCommit API to work with the following objects:</p>
<p>Repositories, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>CreateRepository</a>, which creates an CodeCommit repository.</p>
</li>
<li>
<p>
<a>DeleteRepository</a>, which deletes an CodeCommit repository.</p>
</li>
<li>
<p>
<a>GetRepository</a>, which returns information about a specified repository.</p>
</li>
<li>
<p>
<a>ListRepositories</a>, which lists all CodeCommit repositories associated with your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p>
</li>
<li>
<p>
<a>UpdateRepositoryName</a>, which changes the name of the
repository. If you change the name of a repository, no other users of that
repository can access it until you send them the new HTTPS or SSH URL to
use.</p>
</li>
</ul>
<p>Branches, by calling the following:</p>
<ul>
<li>
<p>
<a>CreateBranch</a>, which creates a branch in a specified
repository.</p>
</li>
<li>
<p>
<a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p>
</li>
<li>
<p>
<a>GetBranch</a>, which returns information about a specified branch.</p>
</li>
<li>
<p>
<a>ListBranches</a>, which lists all branches for a specified repository.</p>
</li>
<li>
<p>
<a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p>
</li>
</ul>
<p>Files, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p>
</li>
<li>
<p>
<a>GetBlob</a>, which returns the base-64 encoded content of an
individual Git blob object in a repository.</p>
</li>
<li>
<p>
<a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p>
</li>
<li>
<p>
<a>GetFolder</a>, which returns the contents of a specified folder or directory.</p>
</li>
<li>
<p>
<a>ListFileCommitHistory</a>, which retrieves a list of commits and changes to a specified file. </p>
</li>
<li>
<p>
<a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p>
</li>
</ul>
<p>Commits, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p>
</li>
<li>
<p>
<a>CreateCommit</a>, which creates a commit for changes to a repository.</p>
</li>
<li>
<p>
<a>GetCommit</a>, which returns information about  a commit, including commit
messages and author and committer information.</p>
</li>
<li>
<p>
<a>GetDifferences</a>, which returns information about the
differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID,
or other fully qualified reference).</p>
</li>
</ul>
<p>Merges, by calling the following:</p>
<ul>
<li>
<p>
<a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p>
</li>
<li>
<p>
<a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the
purpose of comparing them and identifying any potential conflicts.</p>
</li>
<li>
<p>
<a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions
of a file in a potential merge.</p>
</li>
<li>
<p>
<a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p>
</li>
<li>
<p>
<a>GetMergeConflicts</a>, which returns information about merge conflicts
between the source and destination branch in a pull request.</p>
</li>
<li>
<p>
<a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p>
</li>
<li>
<p>
<a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p>
</li>
<li>
<p>
<a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p>
</li>
<li>
<p>
<a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p>
</li>
</ul>
<p>Pull requests, by calling the following:</p>
<ul>
<li>
<p>
<a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p>
</li>
<li>
<p>
<a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p>
</li>
<li>
<p>
<a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p>
</li>
<li>
<p>
<a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p>
</li>
<li>
<p>
<a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
</li>
<li>
<p>
<a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequest</a>, which returns information about a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p>
</li>
<li>
<p>
<a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a
pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
</li>
<li>
<p>
<a>ListPullRequests</a>, which lists all pull requests for a repository.</p>
</li>
<li>
<p>
<a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the fast-forward merge option.</p>
</li>
<li>
<p>
<a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the squash merge option.</p>
</li>
<li>
<p>
<a>MergePullRequestByThreeWay</a>, which merges the source destination branch of a pull request into the specified destination
branch for that pull request using the three-way merge option.</p>
</li>
<li>
<p>
<a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p>
</li>
<li>
<p>
<a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p>
</li>
<li>
<p>
<a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p>
</li>
</ul>
<p>Approval rule templates, by calling the following:</p>
<ul>
<li>
<p>
<a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template
with a specified repository. After the template is associated with a repository,
CodeCommit creates approval rules that match the template conditions on
every pull request created in the specified repository.</p>
</li>
<li>
<p>
<a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a
template with one or more specified repositories. After the template is
associated with a repository, CodeCommit creates approval rules that match
the template conditions on every pull request created in the specified
repositories.</p>
</li>
<li>
<p>
<a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the
association between a template and specified repositories so that approval rules
based on the template are not automatically created when pull requests are
created in those repositories.</p>
</li>
<li>
<p>
<a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories
in your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p>
</li>
<li>
<p>
<a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the
association between a template and a repository so that approval rules based on
the template are not automatically created when pull requests are created in the
specified repository.</p>
</li>
<li>
<p>
<a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p>
</li>
<li>
<p>
<a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the Amazon Web Services Region in your Amazon Web Services account.</p>
</li>
<li>
<p>
<a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p>
</li>
<li>
<p>
<a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an
approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p>
</li>
<li>
<p>
<a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p>
</li>
</ul>
<p>Comments in a repository, by calling the following:</p>
<ul>
<li>
<p>
<a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p>
</li>
<li>
<p>
<a>GetComment</a>, which returns information about a comment on a commit.</p>
</li>
<li>
<p>
<a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p>
</li>
<li>
<p>
<a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers
in a repository.</p>
</li>
<li>
<p>
<a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p>
</li>
<li>
<p>
<a>PostCommentReply</a>, which creates a reply to a comment.</p>
</li>
<li>
<p>
<a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p>
</li>
<li>
<p>
<a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p>
</li>
</ul>
<p>Tags used to tag resources in CodeCommit (not Git tags), by calling the following:</p>
<ul>
<li>
<p>
<a>ListTagsForResource</a>, which gets information about Amazon Web Servicestags for a specified Amazon Resource Name (ARN) in CodeCommit.</p>
</li>
<li>
<p>
<a>TagResource</a>, which adds or updates tags for a resource in CodeCommit.</p>
</li>
<li>
<p>
<a>UntagResource</a>, which removes tags for a resource in CodeCommit.</p>
</li>
</ul>
<p>Triggers, by calling the following:</p>
<ul>
<li>
<p>
<a>GetRepositoryTriggers</a>, which returns information about triggers configured
for a repository.</p>
</li>
<li>
<p>
<a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can
be used to create or delete triggers.</p>
</li>
<li>
<p>
<a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger
by sending data to the trigger target.</p>
</li>
</ul>
<p>For information about how to use CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">CodeCommit User Guide</a>.</p>

## Installing

To install the this package, simply type add or install @aws-sdk/client-codecommit
using your favorite package manager:

- `npm install @aws-sdk/client-codecommit`
- `yarn add @aws-sdk/client-codecommit`
- `pnpm add @aws-sdk/client-codecommit`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeCommitClient` and
the commands you need, for example `AssociateApprovalRuleTemplateWithRepositoryCommand`:

```js
// ES5 example
const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit");
```

```ts
// ES6+ example
import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeCommitClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(params);
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
import * as AWS from "@aws-sdk/client-codecommit";
const client = new AWS.CodeCommit({ region: "REGION" });

// async/await.
try {
  const data = await client.associateApprovalRuleTemplateWithRepository(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateApprovalRuleTemplateWithRepository(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateApprovalRuleTemplateWithRepository(params, (err, data) => {
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
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
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

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codecommit` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.

## Client Commands (Operations List)

<details>
<summary>
AssociateApprovalRuleTemplateWithRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/associateapprovalruletemplatewithrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/associateapprovalruletemplatewithrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/associateapprovalruletemplatewithrepositorycommandoutput.html)

</details>
<details>
<summary>
BatchAssociateApprovalRuleTemplateWithRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/batchassociateapprovalruletemplatewithrepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchassociateapprovalruletemplatewithrepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchassociateapprovalruletemplatewithrepositoriescommandoutput.html)

</details>
<details>
<summary>
BatchDescribeMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/batchdescribemergeconflictscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchdescribemergeconflictscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchdescribemergeconflictscommandoutput.html)

</details>
<details>
<summary>
BatchDisassociateApprovalRuleTemplateFromRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/batchdisassociateapprovalruletemplatefromrepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchdisassociateapprovalruletemplatefromrepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchdisassociateapprovalruletemplatefromrepositoriescommandoutput.html)

</details>
<details>
<summary>
BatchGetCommits
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/batchgetcommitscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchgetcommitscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchgetcommitscommandoutput.html)

</details>
<details>
<summary>
BatchGetRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/batchgetrepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchgetrepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/batchgetrepositoriescommandoutput.html)

</details>
<details>
<summary>
CreateApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createapprovalruletemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createapprovalruletemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createapprovalruletemplatecommandoutput.html)

</details>
<details>
<summary>
CreateBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createbranchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createbranchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createbranchcommandoutput.html)

</details>
<details>
<summary>
CreateCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createcommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createcommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createcommitcommandoutput.html)

</details>
<details>
<summary>
CreatePullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createpullrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createpullrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createpullrequestcommandoutput.html)

</details>
<details>
<summary>
CreatePullRequestApprovalRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createpullrequestapprovalrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createpullrequestapprovalrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createpullrequestapprovalrulecommandoutput.html)

</details>
<details>
<summary>
CreateRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createrepositorycommandoutput.html)

</details>
<details>
<summary>
CreateUnreferencedMergeCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/createunreferencedmergecommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createunreferencedmergecommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/createunreferencedmergecommitcommandoutput.html)

</details>
<details>
<summary>
DeleteApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deleteapprovalruletemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deleteapprovalruletemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deleteapprovalruletemplatecommandoutput.html)

</details>
<details>
<summary>
DeleteBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deletebranchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletebranchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletebranchcommandoutput.html)

</details>
<details>
<summary>
DeleteCommentContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deletecommentcontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletecommentcontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletecommentcontentcommandoutput.html)

</details>
<details>
<summary>
DeleteFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deletefilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletefilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletefilecommandoutput.html)

</details>
<details>
<summary>
DeletePullRequestApprovalRule
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deletepullrequestapprovalrulecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletepullrequestapprovalrulecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deletepullrequestapprovalrulecommandoutput.html)

</details>
<details>
<summary>
DeleteRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/deleterepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deleterepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/deleterepositorycommandoutput.html)

</details>
<details>
<summary>
DescribeMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/describemergeconflictscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/describemergeconflictscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/describemergeconflictscommandoutput.html)

</details>
<details>
<summary>
DescribePullRequestEvents
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/describepullrequesteventscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/describepullrequesteventscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/describepullrequesteventscommandoutput.html)

</details>
<details>
<summary>
DisassociateApprovalRuleTemplateFromRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/disassociateapprovalruletemplatefromrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/disassociateapprovalruletemplatefromrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/disassociateapprovalruletemplatefromrepositorycommandoutput.html)

</details>
<details>
<summary>
EvaluatePullRequestApprovalRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/evaluatepullrequestapprovalrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/evaluatepullrequestapprovalrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/evaluatepullrequestapprovalrulescommandoutput.html)

</details>
<details>
<summary>
GetApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getapprovalruletemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getapprovalruletemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getapprovalruletemplatecommandoutput.html)

</details>
<details>
<summary>
GetBlob
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getblobcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getblobcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getblobcommandoutput.html)

</details>
<details>
<summary>
GetBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getbranchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getbranchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getbranchcommandoutput.html)

</details>
<details>
<summary>
GetComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getcommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentcommandoutput.html)

</details>
<details>
<summary>
GetCommentReactions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getcommentreactionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentreactionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentreactionscommandoutput.html)

</details>
<details>
<summary>
GetCommentsForComparedCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getcommentsforcomparedcommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentsforcomparedcommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentsforcomparedcommitcommandoutput.html)

</details>
<details>
<summary>
GetCommentsForPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getcommentsforpullrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentsforpullrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommentsforpullrequestcommandoutput.html)

</details>
<details>
<summary>
GetCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getcommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getcommitcommandoutput.html)

</details>
<details>
<summary>
GetDifferences
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getdifferencescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getdifferencescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getdifferencescommandoutput.html)

</details>
<details>
<summary>
GetFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getfilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getfilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getfilecommandoutput.html)

</details>
<details>
<summary>
GetFolder
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getfoldercommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getfoldercommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getfoldercommandoutput.html)

</details>
<details>
<summary>
GetMergeCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getmergecommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergecommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergecommitcommandoutput.html)

</details>
<details>
<summary>
GetMergeConflicts
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getmergeconflictscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergeconflictscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergeconflictscommandoutput.html)

</details>
<details>
<summary>
GetMergeOptions
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getmergeoptionscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergeoptionscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getmergeoptionscommandoutput.html)

</details>
<details>
<summary>
GetPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getpullrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestcommandoutput.html)

</details>
<details>
<summary>
GetPullRequestApprovalStates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getpullrequestapprovalstatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestapprovalstatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestapprovalstatescommandoutput.html)

</details>
<details>
<summary>
GetPullRequestOverrideState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getpullrequestoverridestatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestoverridestatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getpullrequestoverridestatecommandoutput.html)

</details>
<details>
<summary>
GetRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getrepositorycommandoutput.html)

</details>
<details>
<summary>
GetRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/getrepositorytriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getrepositorytriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/getrepositorytriggerscommandoutput.html)

</details>
<details>
<summary>
ListApprovalRuleTemplates
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listapprovalruletemplatescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listapprovalruletemplatescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listapprovalruletemplatescommandoutput.html)

</details>
<details>
<summary>
ListAssociatedApprovalRuleTemplatesForRepository
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listassociatedapprovalruletemplatesforrepositorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listassociatedapprovalruletemplatesforrepositorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listassociatedapprovalruletemplatesforrepositorycommandoutput.html)

</details>
<details>
<summary>
ListBranches
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listbranchescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listbranchescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listbranchescommandoutput.html)

</details>
<details>
<summary>
ListFileCommitHistory
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listfilecommithistorycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listfilecommithistorycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listfilecommithistorycommandoutput.html)

</details>
<details>
<summary>
ListPullRequests
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listpullrequestscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listpullrequestscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listpullrequestscommandoutput.html)

</details>
<details>
<summary>
ListRepositories
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listrepositoriescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listrepositoriescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listrepositoriescommandoutput.html)

</details>
<details>
<summary>
ListRepositoriesForApprovalRuleTemplate
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listrepositoriesforapprovalruletemplatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listrepositoriesforapprovalruletemplatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listrepositoriesforapprovalruletemplatecommandoutput.html)

</details>
<details>
<summary>
ListTagsForResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/listtagsforresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listtagsforresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/listtagsforresourcecommandoutput.html)

</details>
<details>
<summary>
MergeBranchesByFastForward
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergebranchesbyfastforwardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbyfastforwardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbyfastforwardcommandoutput.html)

</details>
<details>
<summary>
MergeBranchesBySquash
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergebranchesbysquashcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbysquashcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbysquashcommandoutput.html)

</details>
<details>
<summary>
MergeBranchesByThreeWay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergebranchesbythreewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbythreewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergebranchesbythreewaycommandoutput.html)

</details>
<details>
<summary>
MergePullRequestByFastForward
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergepullrequestbyfastforwardcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbyfastforwardcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbyfastforwardcommandoutput.html)

</details>
<details>
<summary>
MergePullRequestBySquash
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergepullrequestbysquashcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbysquashcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbysquashcommandoutput.html)

</details>
<details>
<summary>
MergePullRequestByThreeWay
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/mergepullrequestbythreewaycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbythreewaycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/mergepullrequestbythreewaycommandoutput.html)

</details>
<details>
<summary>
OverridePullRequestApprovalRules
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/overridepullrequestapprovalrulescommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/overridepullrequestapprovalrulescommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/overridepullrequestapprovalrulescommandoutput.html)

</details>
<details>
<summary>
PostCommentForComparedCommit
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/postcommentforcomparedcommitcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentforcomparedcommitcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentforcomparedcommitcommandoutput.html)

</details>
<details>
<summary>
PostCommentForPullRequest
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/postcommentforpullrequestcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentforpullrequestcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentforpullrequestcommandoutput.html)

</details>
<details>
<summary>
PostCommentReply
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/postcommentreplycommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentreplycommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/postcommentreplycommandoutput.html)

</details>
<details>
<summary>
PutCommentReaction
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/putcommentreactioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putcommentreactioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putcommentreactioncommandoutput.html)

</details>
<details>
<summary>
PutFile
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/putfilecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putfilecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putfilecommandoutput.html)

</details>
<details>
<summary>
PutRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/putrepositorytriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putrepositorytriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/putrepositorytriggerscommandoutput.html)

</details>
<details>
<summary>
TagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/tagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/tagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/tagresourcecommandoutput.html)

</details>
<details>
<summary>
TestRepositoryTriggers
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/testrepositorytriggerscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/testrepositorytriggerscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/testrepositorytriggerscommandoutput.html)

</details>
<details>
<summary>
UntagResource
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/untagresourcecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/untagresourcecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/untagresourcecommandoutput.html)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updateapprovalruletemplatecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatecontentcommandoutput.html)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updateapprovalruletemplatedescriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatedescriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatedescriptioncommandoutput.html)

</details>
<details>
<summary>
UpdateApprovalRuleTemplateName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updateapprovalruletemplatenamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatenamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updateapprovalruletemplatenamecommandoutput.html)

</details>
<details>
<summary>
UpdateComment
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatecommentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatecommentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatecommentcommandoutput.html)

</details>
<details>
<summary>
UpdateDefaultBranch
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatedefaultbranchcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatedefaultbranchcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatedefaultbranchcommandoutput.html)

</details>
<details>
<summary>
UpdatePullRequestApprovalRuleContent
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatepullrequestapprovalrulecontentcommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestapprovalrulecontentcommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestapprovalrulecontentcommandoutput.html)

</details>
<details>
<summary>
UpdatePullRequestApprovalState
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatepullrequestapprovalstatecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestapprovalstatecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestapprovalstatecommandoutput.html)

</details>
<details>
<summary>
UpdatePullRequestDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatepullrequestdescriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestdescriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequestdescriptioncommandoutput.html)

</details>
<details>
<summary>
UpdatePullRequestStatus
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatepullrequeststatuscommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequeststatuscommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequeststatuscommandoutput.html)

</details>
<details>
<summary>
UpdatePullRequestTitle
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updatepullrequesttitlecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequesttitlecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updatepullrequesttitlecommandoutput.html)

</details>
<details>
<summary>
UpdateRepositoryDescription
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updaterepositorydescriptioncommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updaterepositorydescriptioncommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updaterepositorydescriptioncommandoutput.html)

</details>
<details>
<summary>
UpdateRepositoryName
</summary>

[Command API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/classes/updaterepositorynamecommand.html) / [Input](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updaterepositorynamecommandinput.html) / [Output](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-codecommit/interfaces/updaterepositorynamecommandoutput.html)

</details>
