import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeValidDBInstanceModificationsMessage, DescribeValidDBInstanceModificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeValidDBInstanceModificationsCommandInput = DescribeValidDBInstanceModificationsMessage;
export declare type DescribeValidDBInstanceModificationsCommandOutput = DescribeValidDBInstanceModificationsResult & __MetadataBearer;
export declare class DescribeValidDBInstanceModificationsCommand extends $Command<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeValidDBInstanceModificationsCommandInput;
    constructor(input: DescribeValidDBInstanceModificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
