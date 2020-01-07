import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootDBInstanceCommandInput = RebootDBInstanceMessage;
export declare type RebootDBInstanceCommandOutput = RebootDBInstanceResult & __MetadataBearer;
export declare class RebootDBInstanceCommand extends $Command<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: RebootDBInstanceCommandInput;
    constructor(input: RebootDBInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
