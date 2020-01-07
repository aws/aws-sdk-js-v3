import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeFlowRequest, DescribeFlowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFlowCommandInput = DescribeFlowRequest;
export declare type DescribeFlowCommandOutput = DescribeFlowResponse & __MetadataBearer;
export declare class DescribeFlowCommand extends $Command<DescribeFlowCommandInput, DescribeFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: DescribeFlowCommandInput;
    constructor(input: DescribeFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFlowCommandInput, DescribeFlowCommandOutput>;
    private serialize;
    private deserialize;
}
