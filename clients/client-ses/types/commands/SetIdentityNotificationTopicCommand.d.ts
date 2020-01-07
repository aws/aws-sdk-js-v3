import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityNotificationTopicRequest, SetIdentityNotificationTopicResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityNotificationTopicCommandInput = SetIdentityNotificationTopicRequest;
export declare type SetIdentityNotificationTopicCommandOutput = SetIdentityNotificationTopicResponse & __MetadataBearer;
export declare class SetIdentityNotificationTopicCommand extends $Command<SetIdentityNotificationTopicCommandInput, SetIdentityNotificationTopicCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityNotificationTopicCommandInput;
    constructor(input: SetIdentityNotificationTopicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityNotificationTopicCommandInput, SetIdentityNotificationTopicCommandOutput>;
    private serialize;
    private deserialize;
}
