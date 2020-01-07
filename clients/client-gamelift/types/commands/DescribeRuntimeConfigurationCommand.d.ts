import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeRuntimeConfigurationInput, DescribeRuntimeConfigurationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRuntimeConfigurationCommandInput = DescribeRuntimeConfigurationInput;
export declare type DescribeRuntimeConfigurationCommandOutput = DescribeRuntimeConfigurationOutput & __MetadataBearer;
export declare class DescribeRuntimeConfigurationCommand extends $Command<DescribeRuntimeConfigurationCommandInput, DescribeRuntimeConfigurationCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeRuntimeConfigurationCommandInput;
    constructor(input: DescribeRuntimeConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRuntimeConfigurationCommandInput, DescribeRuntimeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
