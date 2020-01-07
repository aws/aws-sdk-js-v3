import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AssociateQualificationWithWorkerRequest, AssociateQualificationWithWorkerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateQualificationWithWorkerCommandInput = AssociateQualificationWithWorkerRequest;
export declare type AssociateQualificationWithWorkerCommandOutput = AssociateQualificationWithWorkerResponse & __MetadataBearer;
export declare class AssociateQualificationWithWorkerCommand extends $Command<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput, MTurkClientResolvedConfig> {
    readonly input: AssociateQualificationWithWorkerCommandInput;
    constructor(input: AssociateQualificationWithWorkerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateQualificationWithWorkerCommandInput, AssociateQualificationWithWorkerCommandOutput>;
    private serialize;
    private deserialize;
}
