import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { DisassociateQualificationFromWorkerRequest, DisassociateQualificationFromWorkerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateQualificationFromWorkerCommandInput = DisassociateQualificationFromWorkerRequest;
export declare type DisassociateQualificationFromWorkerCommandOutput = DisassociateQualificationFromWorkerResponse & __MetadataBearer;
export declare class DisassociateQualificationFromWorkerCommand extends $Command<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput, MTurkClientResolvedConfig> {
    readonly input: DisassociateQualificationFromWorkerCommandInput;
    constructor(input: DisassociateQualificationFromWorkerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateQualificationFromWorkerCommandInput, DisassociateQualificationFromWorkerCommandOutput>;
    private serialize;
    private deserialize;
}
