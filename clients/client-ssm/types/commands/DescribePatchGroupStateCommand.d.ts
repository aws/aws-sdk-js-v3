import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchGroupStateRequest, DescribePatchGroupStateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePatchGroupStateCommandInput = DescribePatchGroupStateRequest;
export declare type DescribePatchGroupStateCommandOutput = DescribePatchGroupStateResult & __MetadataBearer;
export declare class DescribePatchGroupStateCommand extends $Command<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribePatchGroupStateCommandInput;
    constructor(input: DescribePatchGroupStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput>;
    private serialize;
    private deserialize;
}
