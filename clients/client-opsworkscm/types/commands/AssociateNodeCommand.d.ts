import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { AssociateNodeRequest, AssociateNodeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateNodeCommandInput = AssociateNodeRequest;
export declare type AssociateNodeCommandOutput = AssociateNodeResponse & __MetadataBearer;
export declare class AssociateNodeCommand extends $Command<AssociateNodeCommandInput, AssociateNodeCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: AssociateNodeCommandInput;
    constructor(input: AssociateNodeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateNodeCommandInput, AssociateNodeCommandOutput>;
    private serialize;
    private deserialize;
}
