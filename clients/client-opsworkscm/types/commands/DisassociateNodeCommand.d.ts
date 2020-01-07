import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DisassociateNodeRequest, DisassociateNodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateNodeCommandInput = DisassociateNodeRequest;
export declare type DisassociateNodeCommandOutput = DisassociateNodeResponse & __MetadataBearer;
export declare class DisassociateNodeCommand extends $Command<DisassociateNodeCommandInput, DisassociateNodeCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: DisassociateNodeCommandInput;
    constructor(input: DisassociateNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateNodeCommandInput, DisassociateNodeCommandOutput>;
    private serialize;
    private deserialize;
}
