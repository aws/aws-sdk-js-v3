import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBClusterFromS3Message, RestoreDBClusterFromS3Result } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBClusterFromS3CommandInput = RestoreDBClusterFromS3Message;
export declare type RestoreDBClusterFromS3CommandOutput = RestoreDBClusterFromS3Result & __MetadataBearer;
export declare class RestoreDBClusterFromS3Command extends $Command<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBClusterFromS3CommandInput;
    constructor(input: RestoreDBClusterFromS3CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput>;
    private serialize;
    private deserialize;
}
