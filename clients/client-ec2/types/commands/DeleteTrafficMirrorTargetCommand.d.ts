import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficMirrorTargetCommandInput = DeleteTrafficMirrorTargetRequest;
export declare type DeleteTrafficMirrorTargetCommandOutput = DeleteTrafficMirrorTargetResult & __MetadataBearer;
export declare class DeleteTrafficMirrorTargetCommand extends $Command<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorTargetCommandInput;
    constructor(input: DeleteTrafficMirrorTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput>;
    private serialize;
    private deserialize;
}
