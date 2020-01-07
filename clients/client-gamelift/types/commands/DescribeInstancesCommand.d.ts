import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeInstancesInput, DescribeInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancesCommandInput = DescribeInstancesInput;
export declare type DescribeInstancesCommandOutput = DescribeInstancesOutput & __MetadataBearer;
export declare class DescribeInstancesCommand extends $Command<DescribeInstancesCommandInput, DescribeInstancesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeInstancesCommandInput;
    constructor(input: DescribeInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
