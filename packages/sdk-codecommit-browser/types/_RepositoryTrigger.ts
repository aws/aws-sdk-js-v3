/**
 * <p>Information about a trigger for a repository.</p>
 */
export interface _RepositoryTrigger {
    /**
     * <p>The name of the trigger.</p>
     */
    name: string;

    /**
     * <p>The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).</p>
     */
    destinationArn: string;

    /**
     * <p>Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.</p>
     */
    customData?: string;

    /**
     * <p>The branches that will be included in the trigger configuration. If you specify an empty array, the trigger will apply to all branches.</p> <note> <p>While no content is required in the array, you must include the array itself.</p> </note>
     */
    branches?: Array<string>|Iterable<string>;

    /**
     * <p>The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). </p> <note> <p>The valid value "all" cannot be used with any other values.</p> </note>
     */
    events: Array<'all'|'updateReference'|'createReference'|'deleteReference'|string>|Iterable<'all'|'updateReference'|'createReference'|'deleteReference'|string>;
}

export interface _UnmarshalledRepositoryTrigger extends _RepositoryTrigger {
    /**
     * <p>The branches that will be included in the trigger configuration. If you specify an empty array, the trigger will apply to all branches.</p> <note> <p>While no content is required in the array, you must include the array itself.</p> </note>
     */
    branches?: Array<string>;

    /**
     * <p>The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). </p> <note> <p>The valid value "all" cannot be used with any other values.</p> </note>
     */
    events: Array<'all'|'updateReference'|'createReference'|'deleteReference'|string>;
}