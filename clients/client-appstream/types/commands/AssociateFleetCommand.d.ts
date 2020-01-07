import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { AssociateFleetRequest, AssociateFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateFleetCommandInput = AssociateFleetRequest;
export declare type AssociateFleetCommandOutput = AssociateFleetResult & __MetadataBearer;
export declare class AssociateFleetCommand extends $Command<AssociateFleetCommandInput, AssociateFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: AssociateFleetCommandInput;
    constructor(input: AssociateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateFleetCommandInput, AssociateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
