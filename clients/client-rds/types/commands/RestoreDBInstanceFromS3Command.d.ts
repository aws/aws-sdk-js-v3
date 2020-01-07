import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromS3Message, RestoreDBInstanceFromS3Result } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBInstanceFromS3CommandInput = RestoreDBInstanceFromS3Message;
export declare type RestoreDBInstanceFromS3CommandOutput = RestoreDBInstanceFromS3Result & __MetadataBearer;
export declare class RestoreDBInstanceFromS3Command extends $Command<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBInstanceFromS3CommandInput;
    constructor(input: RestoreDBInstanceFromS3CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBInstanceFromS3CommandInput, RestoreDBInstanceFromS3CommandOutput>;
    private serialize;
    private deserialize;
}
