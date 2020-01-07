import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceToPointInTimeMessage, RestoreDBInstanceToPointInTimeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBInstanceToPointInTimeCommandInput = RestoreDBInstanceToPointInTimeMessage;
export declare type RestoreDBInstanceToPointInTimeCommandOutput = RestoreDBInstanceToPointInTimeResult & __MetadataBearer;
export declare class RestoreDBInstanceToPointInTimeCommand extends $Command<RestoreDBInstanceToPointInTimeCommandInput, RestoreDBInstanceToPointInTimeCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBInstanceToPointInTimeCommandInput;
    constructor(input: RestoreDBInstanceToPointInTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBInstanceToPointInTimeCommandInput, RestoreDBInstanceToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
