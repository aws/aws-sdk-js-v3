import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { GetQueueAttributesRequest, GetQueueAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueueAttributesCommandInput = GetQueueAttributesRequest;
export declare type GetQueueAttributesCommandOutput = GetQueueAttributesResult & __MetadataBearer;
export declare class GetQueueAttributesCommand extends $Command<GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput, SQSClientResolvedConfig> {
    readonly input: GetQueueAttributesCommandInput;
    constructor(input: GetQueueAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
