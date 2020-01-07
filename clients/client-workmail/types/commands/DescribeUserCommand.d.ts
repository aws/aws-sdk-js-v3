import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeUserRequest, DescribeUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserCommandInput = DescribeUserRequest;
export declare type DescribeUserCommandOutput = DescribeUserResponse & __MetadataBearer;
export declare class DescribeUserCommand extends $Command<DescribeUserCommandInput, DescribeUserCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeUserCommandInput;
    constructor(input: DescribeUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserCommandInput, DescribeUserCommandOutput>;
    private serialize;
    private deserialize;
}
