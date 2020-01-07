import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CustomerStorageMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStorageCommandInput = {};
export declare type DescribeStorageCommandOutput = CustomerStorageMessage & __MetadataBearer;
export declare class DescribeStorageCommand extends $Command<DescribeStorageCommandInput, DescribeStorageCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeStorageCommandInput;
    constructor(input: DescribeStorageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStorageCommandInput, DescribeStorageCommandOutput>;
    private serialize;
    private deserialize;
}
