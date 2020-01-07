import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePlayerSessionsCommandInput = DescribePlayerSessionsInput;
export declare type DescribePlayerSessionsCommandOutput = DescribePlayerSessionsOutput & __MetadataBearer;
export declare class DescribePlayerSessionsCommand extends $Command<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribePlayerSessionsCommandInput;
    constructor(input: DescribePlayerSessionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
