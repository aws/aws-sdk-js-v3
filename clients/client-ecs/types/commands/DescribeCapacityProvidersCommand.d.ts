import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeCapacityProvidersRequest, DescribeCapacityProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCapacityProvidersCommandInput = DescribeCapacityProvidersRequest;
export declare type DescribeCapacityProvidersCommandOutput = DescribeCapacityProvidersResponse & __MetadataBearer;
export declare class DescribeCapacityProvidersCommand extends $Command<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeCapacityProvidersCommandInput;
    constructor(input: DescribeCapacityProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
