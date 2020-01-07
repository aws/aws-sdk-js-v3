import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSchemaRequest, DescribeSchemaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSchemaCommandInput = DescribeSchemaRequest;
export declare type DescribeSchemaCommandOutput = DescribeSchemaResponse & __MetadataBearer;
export declare class DescribeSchemaCommand extends $Command<DescribeSchemaCommandInput, DescribeSchemaCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSchemaCommandInput;
    constructor(input: DescribeSchemaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSchemaCommandInput, DescribeSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
