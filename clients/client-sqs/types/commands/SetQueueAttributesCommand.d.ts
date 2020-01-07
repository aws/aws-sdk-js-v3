import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { SetQueueAttributesRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetQueueAttributesCommandInput = SetQueueAttributesRequest;
export declare type SetQueueAttributesCommandOutput = __MetadataBearer;
export declare class SetQueueAttributesCommand extends $Command<SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput, SQSClientResolvedConfig> {
    readonly input: SetQueueAttributesCommandInput;
    constructor(input: SetQueueAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
