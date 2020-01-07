import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetAttributesInput, DescribeFleetAttributesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFleetAttributesCommandInput = DescribeFleetAttributesInput;
export declare type DescribeFleetAttributesCommandOutput = DescribeFleetAttributesOutput & __MetadataBearer;
export declare class DescribeFleetAttributesCommand extends $Command<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeFleetAttributesCommandInput;
    constructor(input: DescribeFleetAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
