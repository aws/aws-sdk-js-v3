import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBInstancesCommandInput = DescribeDBInstancesMessage;
export declare type DescribeDBInstancesCommandOutput = DBInstanceMessage & __MetadataBearer;
export declare class DescribeDBInstancesCommand extends $Command<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBInstancesCommandInput;
    constructor(input: DescribeDBInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBInstancesCommandInput, DescribeDBInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
