import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { StartDBInstanceMessage, StartDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDBInstanceCommandInput = StartDBInstanceMessage;
export declare type StartDBInstanceCommandOutput = StartDBInstanceResult & __MetadataBearer;
export declare class StartDBInstanceCommand extends $Command<StartDBInstanceCommandInput, StartDBInstanceCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartDBInstanceCommandInput;
    constructor(input: StartDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDBInstanceCommandInput, StartDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
