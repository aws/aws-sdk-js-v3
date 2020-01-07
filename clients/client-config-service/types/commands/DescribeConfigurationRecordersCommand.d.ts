import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationRecordersRequest, DescribeConfigurationRecordersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationRecordersCommandInput = DescribeConfigurationRecordersRequest;
export declare type DescribeConfigurationRecordersCommandOutput = DescribeConfigurationRecordersResponse & __MetadataBearer;
export declare class DescribeConfigurationRecordersCommand extends $Command<DescribeConfigurationRecordersCommandInput, DescribeConfigurationRecordersCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationRecordersCommandInput;
    constructor(input: DescribeConfigurationRecordersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationRecordersCommandInput, DescribeConfigurationRecordersCommandOutput>;
    private serialize;
    private deserialize;
}
