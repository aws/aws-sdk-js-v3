import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationRecorderStatusRequest, DescribeConfigurationRecorderStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationRecorderStatusCommandInput = DescribeConfigurationRecorderStatusRequest;
export declare type DescribeConfigurationRecorderStatusCommandOutput = DescribeConfigurationRecorderStatusResponse & __MetadataBearer;
export declare class DescribeConfigurationRecorderStatusCommand extends $Command<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationRecorderStatusCommandInput;
    constructor(input: DescribeConfigurationRecorderStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput>;
    private serialize;
    private deserialize;
}
