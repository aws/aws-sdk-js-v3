import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { UpdateWebhookInput, UpdateWebhookOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWebhookCommandInput = UpdateWebhookInput;
export declare type UpdateWebhookCommandOutput = UpdateWebhookOutput & __MetadataBearer;
export declare class UpdateWebhookCommand extends $Command<UpdateWebhookCommandInput, UpdateWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: UpdateWebhookCommandInput;
    constructor(input: UpdateWebhookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWebhookCommandInput, UpdateWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
