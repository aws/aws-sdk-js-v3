import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBClusterToPointInTimeCommandInput = RestoreDBClusterToPointInTimeMessage;
export declare type RestoreDBClusterToPointInTimeCommandOutput = RestoreDBClusterToPointInTimeResult & __MetadataBearer;
export declare class RestoreDBClusterToPointInTimeCommand extends $Command<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBClusterToPointInTimeCommandInput;
    constructor(input: RestoreDBClusterToPointInTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
