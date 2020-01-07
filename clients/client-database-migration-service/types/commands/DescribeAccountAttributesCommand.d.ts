import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeAccountAttributesMessage, DescribeAccountAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountAttributesCommandInput = DescribeAccountAttributesMessage;
export declare type DescribeAccountAttributesCommandOutput = DescribeAccountAttributesResponse & __MetadataBearer;
export declare class DescribeAccountAttributesCommand extends $Command<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeAccountAttributesCommandInput;
    constructor(input: DescribeAccountAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
