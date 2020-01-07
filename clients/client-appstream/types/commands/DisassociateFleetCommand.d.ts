import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DisassociateFleetRequest, DisassociateFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateFleetCommandInput = DisassociateFleetRequest;
export declare type DisassociateFleetCommandOutput = DisassociateFleetResult & __MetadataBearer;
export declare class DisassociateFleetCommand extends $Command<DisassociateFleetCommandInput, DisassociateFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DisassociateFleetCommandInput;
    constructor(input: DisassociateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateFleetCommandInput, DisassociateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
