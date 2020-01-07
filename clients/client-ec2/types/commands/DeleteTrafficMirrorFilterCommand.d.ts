import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficMirrorFilterCommandInput = DeleteTrafficMirrorFilterRequest;
export declare type DeleteTrafficMirrorFilterCommandOutput = DeleteTrafficMirrorFilterResult & __MetadataBearer;
export declare class DeleteTrafficMirrorFilterCommand extends $Command<DeleteTrafficMirrorFilterCommandInput, DeleteTrafficMirrorFilterCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorFilterCommandInput;
    constructor(input: DeleteTrafficMirrorFilterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorFilterCommandInput, DeleteTrafficMirrorFilterCommandOutput>;
    private serialize;
    private deserialize;
}
