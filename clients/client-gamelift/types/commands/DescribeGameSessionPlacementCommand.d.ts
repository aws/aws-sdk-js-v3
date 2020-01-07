import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionPlacementInput, DescribeGameSessionPlacementOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeGameSessionPlacementCommandInput = DescribeGameSessionPlacementInput;
export declare type DescribeGameSessionPlacementCommandOutput = DescribeGameSessionPlacementOutput & __MetadataBearer;
export declare class DescribeGameSessionPlacementCommand extends $Command<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionPlacementCommandInput;
    constructor(input: DescribeGameSessionPlacementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput>;
    private serialize;
    private deserialize;
}
