import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBInstanceAutomatedBackupsCommandInput = DescribeDBInstanceAutomatedBackupsMessage;
export declare type DescribeDBInstanceAutomatedBackupsCommandOutput = DBInstanceAutomatedBackupMessage & __MetadataBearer;
export declare class DescribeDBInstanceAutomatedBackupsCommand extends $Command<DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBInstanceAutomatedBackupsCommandInput;
    constructor(input: DescribeDBInstanceAutomatedBackupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
