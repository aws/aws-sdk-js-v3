import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StopDBInstanceMessage, StopDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDBInstanceCommandInput = StopDBInstanceMessage;
export declare type StopDBInstanceCommandOutput = StopDBInstanceResult & __MetadataBearer;
export declare class StopDBInstanceCommand extends $Command<StopDBInstanceCommandInput, StopDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: StopDBInstanceCommandInput;
    constructor(input: StopDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDBInstanceCommandInput, StopDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
