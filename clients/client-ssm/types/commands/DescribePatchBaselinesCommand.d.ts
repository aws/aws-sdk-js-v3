import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchBaselinesRequest, DescribePatchBaselinesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePatchBaselinesCommandInput = DescribePatchBaselinesRequest;
export declare type DescribePatchBaselinesCommandOutput = DescribePatchBaselinesResult & __MetadataBearer;
export declare class DescribePatchBaselinesCommand extends $Command<DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchBaselinesCommandInput;
    constructor(input: DescribePatchBaselinesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput>;
    private serialize;
    private deserialize;
}
