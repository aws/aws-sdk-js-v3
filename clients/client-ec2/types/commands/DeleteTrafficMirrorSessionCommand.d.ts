import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorSessionRequest, DeleteTrafficMirrorSessionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTrafficMirrorSessionCommandInput = DeleteTrafficMirrorSessionRequest;
export declare type DeleteTrafficMirrorSessionCommandOutput = DeleteTrafficMirrorSessionResult & __MetadataBearer;
export declare class DeleteTrafficMirrorSessionCommand extends $Command<DeleteTrafficMirrorSessionCommandInput, DeleteTrafficMirrorSessionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorSessionCommandInput;
    constructor(input: DeleteTrafficMirrorSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorSessionCommandInput, DeleteTrafficMirrorSessionCommandOutput>;
    private serialize;
    private deserialize;
}
