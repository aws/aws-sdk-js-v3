import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteWebhookCommandInput = DeleteWebhookInput;
export declare type DeleteWebhookCommandOutput = DeleteWebhookOutput & __MetadataBearer;
export declare class DeleteWebhookCommand extends $Command<DeleteWebhookCommandInput, DeleteWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: DeleteWebhookCommandInput;
    constructor(input: DeleteWebhookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
