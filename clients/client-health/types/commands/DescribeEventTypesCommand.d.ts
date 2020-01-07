import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventTypesRequest, DescribeEventTypesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventTypesCommandInput = DescribeEventTypesRequest;
export declare type DescribeEventTypesCommandOutput = DescribeEventTypesResponse & __MetadataBearer;
export declare class DescribeEventTypesCommand extends $Command<DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventTypesCommandInput;
    constructor(input: DescribeEventTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventTypesCommandInput, DescribeEventTypesCommandOutput>;
    private serialize;
    private deserialize;
}
