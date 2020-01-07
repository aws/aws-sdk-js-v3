import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutWebhookInput, PutWebhookOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutWebhookCommandInput = PutWebhookInput;
export declare type PutWebhookCommandOutput = PutWebhookOutput & __MetadataBearer;
export declare class PutWebhookCommand extends $Command<PutWebhookCommandInput, PutWebhookCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutWebhookCommandInput;
    constructor(input: PutWebhookCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutWebhookCommandInput, PutWebhookCommandOutput>;
    private serialize;
    private deserialize;
}
