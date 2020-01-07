import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DescribeConfigurationSetRequest, DescribeConfigurationSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConfigurationSetCommandInput = DescribeConfigurationSetRequest;
export declare type DescribeConfigurationSetCommandOutput = DescribeConfigurationSetResponse & __MetadataBearer;
export declare class DescribeConfigurationSetCommand extends $Command<DescribeConfigurationSetCommandInput, DescribeConfigurationSetCommandOutput, SESClientResolvedConfig> {
    readonly input: DescribeConfigurationSetCommandInput;
    constructor(input: DescribeConfigurationSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationSetCommandInput, DescribeConfigurationSetCommandOutput>;
    private serialize;
    private deserialize;
}
