import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeAliasInput, DescribeAliasOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAliasCommandInput = DescribeAliasInput;
export declare type DescribeAliasCommandOutput = DescribeAliasOutput & __MetadataBearer;
export declare class DescribeAliasCommand extends $Command<DescribeAliasCommandInput, DescribeAliasCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeAliasCommandInput;
    constructor(input: DescribeAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAliasCommandInput, DescribeAliasCommandOutput>;
    private serialize;
    private deserialize;
}
