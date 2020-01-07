import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionDetailsInput, DescribeGameSessionDetailsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGameSessionDetailsCommandInput = DescribeGameSessionDetailsInput;
export declare type DescribeGameSessionDetailsCommandOutput = DescribeGameSessionDetailsOutput & __MetadataBearer;
export declare class DescribeGameSessionDetailsCommand extends $Command<DescribeGameSessionDetailsCommandInput, DescribeGameSessionDetailsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionDetailsCommandInput;
    constructor(input: DescribeGameSessionDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionDetailsCommandInput, DescribeGameSessionDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
