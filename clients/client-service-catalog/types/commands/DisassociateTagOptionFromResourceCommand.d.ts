import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateTagOptionFromResourceInput, DisassociateTagOptionFromResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateTagOptionFromResourceCommandInput = DisassociateTagOptionFromResourceInput;
export declare type DisassociateTagOptionFromResourceCommandOutput = DisassociateTagOptionFromResourceOutput & __MetadataBearer;
export declare class DisassociateTagOptionFromResourceCommand extends $Command<DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateTagOptionFromResourceCommandInput;
    constructor(input: DisassociateTagOptionFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTagOptionFromResourceCommandInput, DisassociateTagOptionFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
