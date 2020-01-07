import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeAttackRequest, DescribeAttackResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAttackCommandInput = DescribeAttackRequest;
export declare type DescribeAttackCommandOutput = DescribeAttackResponse & __MetadataBearer;
export declare class DescribeAttackCommand extends $Command<DescribeAttackCommandInput, DescribeAttackCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeAttackCommandInput;
    constructor(input: DescribeAttackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAttackCommandInput, DescribeAttackCommandOutput>;
    private serialize;
    private deserialize;
}
