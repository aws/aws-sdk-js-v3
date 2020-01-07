import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { CreateWebhookInput, CreateWebhookOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWebhookCommandInput = CreateWebhookInput;
export declare type CreateWebhookCommandOutput = CreateWebhookOutput & __MetadataBearer;
export declare class CreateWebhookCommand extends $Command<CreateWebhookCommandInput, CreateWebhookCommandOutput, CodeBuildClientResolvedConfig> {
    readonly input: CreateWebhookCommandInput;
    constructor(input: CreateWebhookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeBuildClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWebhookCommandInput, CreateWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
