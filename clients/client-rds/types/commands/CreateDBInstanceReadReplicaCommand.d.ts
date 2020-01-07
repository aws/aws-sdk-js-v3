import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBInstanceReadReplicaMessage, CreateDBInstanceReadReplicaResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBInstanceReadReplicaCommandInput = CreateDBInstanceReadReplicaMessage;
export declare type CreateDBInstanceReadReplicaCommandOutput = CreateDBInstanceReadReplicaResult & __MetadataBearer;
export declare class CreateDBInstanceReadReplicaCommand extends $Command<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBInstanceReadReplicaCommandInput;
    constructor(input: CreateDBInstanceReadReplicaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBInstanceReadReplicaCommandInput, CreateDBInstanceReadReplicaCommandOutput>;
    private serialize;
    private deserialize;
}
