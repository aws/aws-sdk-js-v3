import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGameSessionQueuesCommandInput = DescribeGameSessionQueuesInput;
export declare type DescribeGameSessionQueuesCommandOutput = DescribeGameSessionQueuesOutput & __MetadataBearer;
export declare class DescribeGameSessionQueuesCommand extends $Command<DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionQueuesCommandInput;
    constructor(input: DescribeGameSessionQueuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
